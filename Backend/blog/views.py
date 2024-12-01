from django.shortcuts import render,get_object_or_404,get_list_or_404, redirect
from django.contrib import messages
from .models import Post
from .forms import PostForm

# Create your views here.
def post(request):
    posts= Post.objects.all()
    context={
        'posts' : posts
    }
    return render(request, 'blog/Post_list.html', context)

def home(request):
    return render(request, 'blog/index.html')

def post_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author= request.user

            post.save()
            messages.success(request, 'Post created successfully!')
            return redirect('post_detail.html', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'blog/Post_form.html', {'form': form})

def post_update(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == 'POST':
        form = PostForm(request.Post, instance=post)
        if form.is_valid():
            post = form.save(commit = False)
            post.author = request.user
            post.save()
            messages.success(request, 'Post updated successfully!')
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/Post_form.html', {'form': form})

def post_delete(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == 'POST':
        post.delete()
        messages.success(request, 'Post deleted successfully!')
        return redirect('Post')
    return('blog/Post_confirm_delete.html', {'Post' : post})
    



