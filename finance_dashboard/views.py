from django.shortcuts import render
from data.models import Transactiondata
def dashboard(request):
    return render(request,'home.html')

def transactions(request):
    transdata = Transactiondata.objects.all()
    context = {
        'transdata':transdata,
    }
    return render(request,'transaction.html',context)