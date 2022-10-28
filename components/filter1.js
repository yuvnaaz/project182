import React, {Component} from 'react';
import {Image,View} from 'react-native';

const filter1 = ({
    face:{
        bounds:{
            size:{ width: faceWidth, height: faceHeight }
        },
        leftEyePosition,
        rightEyePosition,
        noseBasePosition
    }
})

var filterWidth = faceWidth;
var filterHeight = faceHeight;

const transformAngle = (
    angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y) / (rightEyePosition.x - leftEyePosition.x))
 ) => (angleRad * 180) / Math.PI

 return(    
    <View style={{
        position: 'absolute',
        left: leftEyePosition.x - faceWidth * 0.675,
        top: leftEyePosition.y - faceHeight * 0.5
    }}>
        <Image
            source={require('../assets/crown-pic1.png')}
            style={{
                width: filterWidth,
                height: filterHeight,
                resizeMode: 'contain',
                transform: [{ rotate: `${transformAngle()}deg` }]
            }}
        />
    </View>
);


export default Filter1
