from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Note
from . serializers import NoteSerialezer
# Create your views here.

@api_view(['GET'])
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
    
     return Response(routes)
 
@api_view(['GET'])
def getNotes(request):
    
    notes = Note.objects.all()
    serializer = NoteSerialezer(instance= notes,many= True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request,pk):
    
    note = Note.objects.get(id=pk)
    serializer = NoteSerialezer(instance= note,many= False)
    return Response(serializer.data)

@api_view (['PUT'])
def updateNote(request,pk):
    data = request.data
    note = Note.objects.get(id= pk)
    serializer = NoteSerialezer(instance=note,data=data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request,pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('note was deleted')

@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Note.objects.create(body = data['body'])
    serializer = NoteSerialezer(instance=note,many = False)
    return Response(serializer.data)