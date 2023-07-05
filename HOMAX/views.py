from django.shortcuts import render

def home(request):
    return render(request, 'base.html')

def index(request):
    return render(request, 'index.html')

def gallery(request):
    return render(request, 'gallery.html')

def about(request):
    return render(request, 'about.html')

def book_contact(request):
    return render(request, 'book_contact.html')
