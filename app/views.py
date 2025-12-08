from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, get_object_or_404 
from .models import Building, CrowdStatus # Import your models!
import json

User = get_user_model()
  
def homepage(request):
    return render(request, 'index.html', {'user': request.user})

@login_required(login_url='/login/')
def directory_view(request):
    return render(request, 'directory.html', {'user': request.user})

@login_required(login_url='/login/')
def explore_view(request):
    return render(request, 'explore.html', {'user': request.user})
  
@login_required(login_url='/login/')
def settings_view(request):
    return render(request, 'settings.html', {'user': request.user})

def signup_view(request):
    if request.user.is_authenticated:
        return redirect('homepage')
    
    if request.method == 'POST':
        firstname = request.POST.get('Firstname', '').strip()
        lastname = request.POST.get('Lastname', '').strip()
        email = request.POST.get('email', '').strip().lower()
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        # Required fields check
        if not (email and password1 and password2):
            messages.error(request, "Please fill in all required fields.")
            return render(request, "signup.html")

        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return render(request, "signup.html")

        if User.objects.filter(email=email).exists():
            messages.error(request, "An account with that email already exists.")
            return render(request, "signup.html")

        # Create user
        user = User.objects.create_user(
            username=email,
            email=email,
            password=password1,
            first_name=firstname,
            last_name=lastname,
        )

        login(request, user)
        return redirect("homepage")

    return render(request, "signup.html")


def login_view(request):
    if request.user.is_authenticated:
        return redirect('homepage')
    
    if request.method == "POST":
        email = request.POST.get("email", "").strip().lower()
        password = request.POST.get("password")

        if not email or not password:
            messages.error(request, "Please enter both email and password.")
            return render(request, "login.html")

        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            next_url = request.POST.get("next") or request.GET.get("next")
            if next_url:
                return redirect(next_url)
            return redirect("homepage")
        else:
            messages.error(request, "Invalid email or password.")

    return render(request, "login.html")


def logout_view(request):
    logout(request)
    return redirect("homepage",)

def phelan_view(request):
    building = get_object_or_404(Building, short_name='phelan')

    status_obj, _ = CrowdStatus.objects.get_or_create(building=building)

    context = {
        'building': building,
        'status': status_obj
    }
    return render(request, 'phelan.html', context)
    
def santos_view(request):
    # 1. Fetch the Building object for Phelan Hall
    building = get_object_or_404(Building, short_name='santos')
    
    # 2. Fetch the linked CrowdStatus object using the relationship name (lowercase model name)
    # Django allows you to access the linked model directly using 'crowdstatus' 
    current_status_obj = building.crowdstatus 
    
    context = {
        'building': building,
        'status': current_status_obj # Pass the status object too
    }
    return render(request, 'santos.html', context)

@csrf_exempt
@require_POST
def update_crowd_status_ajax(request, building_id):
    building = get_object_or_404(Building, pk=building_id)

    try:
        status_obj = CrowdStatus.objects.get(building=building)
    except CrowdStatus.DoesNotExist:
        return JsonResponse(
            {'success': False, 'error': 'Crowd status not initialized'},
            status=400
        )

    status_key = request.POST.get("status")

    status_map = {
        'light': 'LIGHT',
        'moderate': 'MOD',
        'heavy': 'HEAVY',
    }

    db_status = status_map.get(status_key)
    if not db_status:
        return JsonResponse({'success': False, 'error': 'Invalid status'}, status=400)

    status_obj.current_status = db_status
    status_obj.save(update_fields=['current_status'])

    return JsonResponse({'success': True})