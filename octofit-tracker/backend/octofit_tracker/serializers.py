from rest_framework import serializers
from .models import User, Team, Activity, Workout, Leaderboard

class TeamSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100)

class UserSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    team = serializers.CharField(max_length=100)

class ActivitySerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    user = serializers.CharField(max_length=100)
    type = serializers.CharField(max_length=50)
    duration = serializers.IntegerField()
    date = serializers.DateField()

class WorkoutSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    suggested_for = serializers.CharField(max_length=100)

class LeaderboardSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    user = serializers.CharField(max_length=100)
    score = serializers.IntegerField()
