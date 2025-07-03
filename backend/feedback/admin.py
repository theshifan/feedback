from django.contrib import admin

# Register your models here.
from django.contrib import admin
from feedback.models import *
from django.db.models import Avg
from django.core.serializers.json import DjangoJSONEncoder
import json

# chnanges the admin panel
class UserAdmin(admin.ModelAdmin):
    
    def changelist_view(self, request, extra_context=None):
        # Aggregate the prduct and the ratings
        chart_data = (
            Feedback.objects
            .values('product__name')  # get product name
            .annotate(avg_rating=Avg('rating'))  # average of ratings
            .order_by('product__name')
        )
        # Serialize and attach the chart data to the template context
        as_json = json.dumps(list(chart_data), cls=DjangoJSONEncoder)
        
        extra_context = extra_context or {"chart_data": as_json}
        

        return super().changelist_view(request, extra_context=extra_context)

admin.site.register(Product, UserAdmin)
admin.site.register(Feedback)



