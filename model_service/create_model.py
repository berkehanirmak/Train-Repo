import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

# Örnek veri oluşturma (kendi verinizi buraya ekleyin)
data = pd.DataFrame({
    'hour': [8, 12, 18, 20],
    'day_of_week': [1, 3, 5, 7],
    'previous_occupancy': [30, 50, 70, 90],
    'current_occupancy': [35, 55, 75, 85]  # Hedef değişken
})

# Özellikler ve hedef değişken
X = data[['hour', 'day_of_week', 'previous_occupancy']]
y = data['current_occupancy']

# Modeli oluşturma ve eğitme
model = RandomForestRegressor()
model.fit(X, y)

# Modeli kaydetme
joblib.dump(model, 'occupancy_model.pkl')
