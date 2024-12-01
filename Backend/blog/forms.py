from .models import Post
from django import forms
from .forms import Post


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
