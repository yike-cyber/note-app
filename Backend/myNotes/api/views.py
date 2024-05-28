from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRoutes(request):
    
     routes = [
        {
            'EndPoint':'/notes',
            'method':'GET',
            'body':None,
            'description':'returns an array of notes'
        },
        {
            'EndPoint':'/notes/id',
            'method':'GET',
            'body':{'body':""},
            'description':'return single note object'
        },
        {
            'EndPoint':'/notes/create/',
            'method':'POST',
            'body':{'body':""},
            'description':'creates new note with data sent in post request'
        },
        
        {
            'EndPoint':'/notes/update/',
            'method':'PUT',
            'body':{'body':""},
            'description':'creates an existing  note with data sent in post request'
        },
        
        {
            'EndPoint':'/notes/delete',
            'method':'DELETE',
            'body':None,
            'description':'deletes an existing note'
        } 
        
    ]
    
     return JsonResponse(routes,safe=False)