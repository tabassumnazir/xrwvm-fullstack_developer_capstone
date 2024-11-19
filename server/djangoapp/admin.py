from django.contrib import admin
from .models import CarMake, CarModel

# CarModelInline class
class CarModelInline(admin.TabularInline):
    model = CarModel
    extra = 1  # Allows adding one extra CarModel inline by default

# CarModelAdmin class
class CarModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'car_make', 'type', 'year')  # Updated field names
    list_filter = ('type', 'year')  # Optional: Adds filters for these fields
    search_fields = ('name', 'car_make__name')  # Allows searching by model name and car make name

# CarMakeAdmin class with CarModelInline
class CarMakeAdmin(admin.ModelAdmin):
    inlines = [CarModelInline]
    list_display = ('name', 'description')  # Display these fields for CarMake
    search_fields = ('name',)  # Allows searching by name

# Register models here
admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)
