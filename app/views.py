from django.shortcuts import render

# Create your views here.

def homepage(request):
    return render(request, 'index.html')

def login_view(request):
    return render(request, 'login.html')

