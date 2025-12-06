from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model

User = get_user_model()


def homepage(request):
    return render(request, 'index.html', {'user': request.user})


@login_required(login_url='/login/')
def directory_view(request):
    return render(request, 'directory.html', {'user': request.user})


def signup_view(request):
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
