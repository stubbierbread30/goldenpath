from django.shortcuts import render

# Create your views here.

def homepage(request):
    return render(request, 'index.html')
def directory_view(request):
    return render(request, 'directory.html')