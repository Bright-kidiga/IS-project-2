from django.shortcuts import render
from django.http import JsonResponse
from .models import Application
from .serializers import ApplicationSerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(request):
    rest_list = Application.objects.order_by('-pub_date')
    context = {'rest_list': rest_list}
    return render(request, 'food/index.html', context)


def get_rest_list(request):
    if request.method == "GET":
        rest_list = Application.objects.order_by('-pub_date')
        serializer = ApplicationSerializer(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)
