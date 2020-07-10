from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.urls import path
from dotenv import load_dotenv
import os

load_dotenv()

GREETING = os.getenv('GREETING', 'Hello')

@api_view(['GET'])
def hello_world(request, name):
    return Response({
        "message": GREETING + ' ' + name
    })

urlpatterns = [
  path(r'hello/<name>/', hello_world),
]
