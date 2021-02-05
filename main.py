while True:
    music.set_volume(50)
    if input.acceleration(Dimension.Z) > 70:
        music.siren.play()
    else:
        light.set_all(light.rgb(255, 0, 0))


