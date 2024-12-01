from django.shortcuts import render, get_list_or_404, redirect
from .models import product
# Create your views here.
def product(request):
    products= product.objects.all()
    context={
        'products' : products
    }
    return render(request, 'sales/Products.html', context)