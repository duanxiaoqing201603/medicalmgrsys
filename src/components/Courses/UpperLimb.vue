<!--上肢肌-->
<template>
    <div class="UpperLimb">
        <h2 class="jp_title"><span class="borderspan"></span><span class="title_span">{{id}}</span></h2>
        <div class="laboratoryRight" id="laboratory-outer1">

            <div class="describe">
                <div>
                    <h3 style="text-align: left;">一、上肢带肌</h3>
                    <img style="width:450px;" src="images/biaoge5_1.png" />

                    <h3 style="text-align: left;">二、臂肌</h3>
                    <img style="width:450px;" src="images/biaoge5_2.png" />
                    <h3 style="text-align: left;">三、前臂肌</h3>
                    <img style="width:450px;" src="images/biaoge5_3.png" />
                    <h3 style="text-align: left;">四、手肌</h3>
                    <img style="width:450px;" src="images/biaoge5_4.png" />
                </div>
            </div>
            <div class="human_right">
                <iframe id="head" src="https://human.biodigital.com/widget/?be=30I4&ui-tools=true&ui-dissect=true&ui-isolate=true&ui-xray=true&ui-cross-section=false&ui-annotations=true&ui-info=false&ui-zoom=true&ui-share=false&dk=92fd078e4c4a38a737e9511b38aabaeb8d4875b1"
                        frameborder="0">
                </iframe>

            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"UpperLimb",
        props:["id"]
    }
</script>
