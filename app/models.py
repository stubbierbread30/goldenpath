from django.db import models

class Building(models.Model):
    # The full name of the building (e.g., Santos Hall)
    building_name = models.CharField(max_length=100) 
    # A short, unique identifier (e.g., 'santos')—handy for referencing
    short_name = models.CharField(max_length=50, unique=True) 

    def __str__(self):
        return self.building_name

class CrowdStatus(models.Model):
    STATUS_CHOICES = [
        ('LIGHT', 'Not Crowded'),  # Database Key  : Display Name 
        ('MOD', 'Moderately Crowded'),
        ('HEAVY', 'Very Crowded'),
    ]
    
    building = models.OneToOneField('Building', on_delete=models.CASCADE)
    #current choice (LIGHT, MOD, or HEAVY)
    current_status = models.CharField(
        max_length=10, 
        choices=STATUS_CHOICES, 
        default='LIGHT'
    )
    
    class Meta:
        verbose_name_plural = "Crowd Status"

    def __str__(self):
        return f"{self.building.building_name}: {self.get_current_status_display()}"
