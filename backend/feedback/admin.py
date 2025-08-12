from django.contrib import admin
from feedback.models import *
from django.db.models import Avg
from django.core.serializers.json import DjangoJSONEncoder
import json

class WriterAdmin(admin.ModelAdmin):
    change_list_template = 'admin/feedback/feedback/change_list.html'  # More specific path
    
    def changelist_view(self, request, extra_context=None):
        # Aggregate the products and ratings
        chart_data = (
            Feedback.objects
            .values('products__name')
            .annotate(avg_rating=Avg('rating'))
            .order_by('products__name')
        )
        
        # Convert to format Chart.js expects
        chart_labels = [item['products__name'] for item in chart_data]
        chart_values = [float(item['avg_rating']) for item in chart_data]  # Ensure float
        
        # Create proper Chart.js data structure
        chart_js_data = {
            "labels": chart_labels,
            "datasets": [{
                "label": "Average Rating",
                "data": chart_values,
            }]
        }
        
        extra_context = extra_context or {}
        extra_context['chart_data'] = json.dumps(chart_js_data, cls=DjangoJSONEncoder)
        return super().changelist_view(request, extra_context=extra_context)

admin.site.register(Product)
admin.site.register(Feedback, WriterAdmin)
admin.site.register(Category)

admin.site.site_header = "FeedBack Admin"
admin.site.site_title = "FeedBack Admin Portal"
admin.site.index_title = "Welcome to The FeedBack Portal"