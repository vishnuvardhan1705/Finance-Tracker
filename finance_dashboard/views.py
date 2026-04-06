from django.shortcuts import render
from data.models import Transactiondata

def dashboard(request):
    return render(request,'home.html')

def transactions(request):
    type_filter = request.GET.get('type')

    if type_filter:
        data = Transactiondata.objects.filter(type=type_filter)
    else:
        data = Transactiondata.objects.all()

    return render(request, 'transaction.html', {'data': data})

def insights(request):
    return render(request, 'insights.html')