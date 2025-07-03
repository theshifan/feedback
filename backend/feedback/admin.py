from django.contrib import admin

# Register your models here.
from django.contrib import admin
from feedback.models import *
from django.db.models import Avg
from django.core.serializers.json import DjangoJSONEncoder
import json

# chnanges the admin panel
class WriterAdmin(admin.ModelAdmin):
    change_list_template = 'admin/change_list.html'
    def changelist_view(self, request, extra_context=None):
        # Aggregate the prduct and the ratings
        chart_data = (
            Feedback.objects
            .values('products__name')  # get product name
            .annotate(avg_rating=Avg('rating'))  # average of ratings
            .order_by('products__name')
        )
        # Serialize and attach the chart data to the template context
        as_json = json.dumps(list(chart_data), cls=DjangoJSONEncoder)
        extra_context = extra_context or {"chart_data": as_json}
        return super().changelist_view(request, extra_context=extra_context)

admin.site.register(Product)
admin.site.register(Feedback, WriterAdmin)



