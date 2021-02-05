while (true) {
    music.setVolume(50)
    if (input.acceleration(Dimension.Z) > 70) {
        music.siren.play()
    } else {
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
