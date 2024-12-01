from django.urls import path
from .import views

urlpatterns=[
    path('', views.home, name='home'),
    path('post/', views.post, name='Post'),
    path('post/new/', views.post_create, name= 'Post_create'),
    path('post/<int:pk>/edit/',views.post_update, name='Post_update'),
    path('post/<int:pk>/delete/', views.post_delete, name='Post_delete')
]