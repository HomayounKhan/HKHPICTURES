from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from HOMAX import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('gallery/', views.gallery, name='gallery'),
    path('about/', views.about, name='about'),
    path('book_contact/', views.book_contact, name='book_contact'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)