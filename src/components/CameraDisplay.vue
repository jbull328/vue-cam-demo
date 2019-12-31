<template>
    <div class='ui container'>
        <div class='ui divider'></div>
        <div class="icon-group">   
            <div  class="camera-icon" @click="captureImage">
                <i class="big camera icon" ></i>
                <p>Take Picture</p>
            </div>
            <div class='camera-icon' @click="rotateImage">
                <i class="big redo alternate icon"></i>
                <p>Rotate</p> 
            </div>
            <div  class='camera-icon' >
                <i class="big thumbs up outline icon"></i>
                <p>Done</p> 
            </div>
            <div class="camera-icon" @click="cancelImage">
                <i class="big cancel icon"></i>
                <p>Cancel</p>
            </div>
        </div>
    
        <img class="camera-stream" src="../../src/assets/image.png">
        
    </div>



</template>

<script>
    import axios from 'axios';

    
</script>

<style>
    .icon-group {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 12px auto;
    }
    .camera-icon {
        width: 15%;
        vertical-align: middle;
        margin: auto;
    }
    .camera-stream {
        margin: 120px 170px;
        width: 50%;
    }
     
</style>