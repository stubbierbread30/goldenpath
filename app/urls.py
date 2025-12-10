from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('directory/', views.directory_view, name='directory'),
    path('phelan/', views.phelan_view, name='phelan'),
    path('santos/', views.santos_view, name='santos'),
    path('settings/', views.settings_view, name='settings'),
    path('explore/', views.explore_view, name='explore'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]