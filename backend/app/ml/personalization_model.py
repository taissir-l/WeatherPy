from sklearn.cluster import KMeans
import pandas as pd

def personalize_forecast(user_data):
    model = KMeans(n_clusters=3)
    model.fit(user_data)
    return model.predict(user_data)