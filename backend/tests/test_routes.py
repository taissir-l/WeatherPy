def test_weather_route(client):
    response = client.get('/api/weather?city=London')
    assert response.status_code == 200
    assert 'temp' in response.json['main']