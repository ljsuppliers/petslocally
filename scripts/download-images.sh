#!/bin/bash
# Download high-quality pet images from Unsplash

mkdir -p ~/clawd/websites/petslocally/public/images/articles

# London - Golden retriever in a park
curl -sL "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/london.jpg

# Manchester - Border collie 
curl -sL "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/manchester.jpg

# Birmingham - Labrador
curl -sL "https://images.unsplash.com/photo-1579213838058-84c8e2c8c0ed?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/birmingham.jpg

# Edinburgh - Scottish terrier / Small dog
curl -sL "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/edinburgh.jpg

# Bristol - Cockapoo / Fluffy dog
curl -sL "https://images.unsplash.com/photo-1587559049444-3b21c1d42319?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/bristol.jpg

# How to choose a vet - Vet with pet
curl -sL "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/how-to-choose-a-vet.jpg

# Dog grooming guide - Grooming
curl -sL "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/dog-grooming-guide.jpg

# First time pet owner - Person with puppy
curl -sL "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/first-time-pet-owner-tips.jpg

# Choosing pet food - Pet food bowl
curl -sL "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=1200&h=675&fit=crop&crop=faces" -o ~/clawd/websites/petslocally/public/images/articles/choosing-the-right-pet-food.jpg

echo "Images downloaded!"
ls -la ~/clawd/websites/petslocally/public/images/articles/
