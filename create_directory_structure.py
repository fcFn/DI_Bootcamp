from os import makedirs

# Create the following directory structure in the root directory
# ├── Week{n > 11}
# │   ├── Day{n % 2 == 0}
# │   │   ├── ExercisesXP
# │   │   ├── DailyChallenge

for week in range(12, 26):
    try: 
      makedirs(f"./Week{week}")

      for day in range(1, 6):
          if day % 2 == 0:
            
              makedirs(f"./Week{week}/Day{day}/ExercisesXP")
              makedirs(f"./Week{week}/Day{day}/DailyChallenge")
    except (FileExistsError):
      continue
