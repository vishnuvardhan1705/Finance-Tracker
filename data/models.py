from django.db import models

class Transactiondata(models.Model):
    date = models.DateField()
    amount = models.IntegerField()
    category = models.CharField(max_length=50)
    type = models.CharField(max_length=70)
    state = models.CharField(max_length=20)
    filt = models.BooleanField(default=True)
    