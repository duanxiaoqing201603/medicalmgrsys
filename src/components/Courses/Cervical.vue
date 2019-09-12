<!--颈肌--><!--颅骨-->
<template>
    <div class="Cervical">
        <h2 class="jp_title"><span class="borderspan"></span><span class="title_span">{{id}}</span></h2>
        <div class="laboratoryRight" id="laboratory-outer1">
            <div class="describe">
                <div>
                    <h3 style="text-align: left;">一、颈浅肌</h3>
                    <img style="width:450px;" src="images/biaoge3_1.png" />

                    <h3 style="text-align: left;">二、颈前肌</h3>
                    <img style="width:450px;" src="images/biaoge3_2.png" />
                    <h3 style="text-align: left;">三、颈深肌</h3>
                    <img style="width:450px;" src="images/biaoge3_3.png" />
                </div>
            </div>
            <div class="human_right">
                <!-- <iframe id="head" src="https://human.biodigital.com/widget/?be=2xS7&ui-tools=true&ui-dissect=true&ui-isolate=true&ui-xray=true&ui-cross-section=false&ui-annotations=true&ui-info=false&ui-zoom=true&ui-share=false&camera=-3.133,170.524,-65.889,-1.145,160.775,-3.566,0,1,-0.015&dk=92fd078e4c4a38a737e9511b38aabaeb8d4875b1"
                 frameborder="0">
                </iframe> -->

            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Cervical",
        props:["id"]
    }
</script>
