int largestAltitude(int* gain, int gainSize){
    int current = gain[0];
    int maxAltitude = 0;
    if(current > 0){
        maxAltitude = current;
    }
    int i = 1;
    for(i; i<gainSize; i++){
        current = current + gain[i];
        if(current > maxAltitude){
            maxAltitude = current;
        }
    }

    return maxAltitude;
}