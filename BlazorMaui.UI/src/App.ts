import { reactive, defineComponent } from "vue"

export default defineComponent({
    setup() {

        const simpleObj = reactive({ loaded: false, webText: "Running on a web browser. No Machine info !!" });
        
        function loadInfo() {
            console.log("Button Clicked !!");
            if (window.hasOwnProperty("DotNet")) {
                console.log("Calling GetSystemInfo");
                window.DotNet.invokeMethodAsync("BlazorMaui.Core", "GetSystemInfo").then((out: any) => {
                    console.log("Got System Info");
                    if (typeof out != undefined) {
                        simpleObj.loaded = true;
                        simpleObj.webText = out;
                    }
                });
            }
            else {
                simpleObj.loaded = true;
            }
        }
        return {
            simpleObj,
            loadInfo
        }
    },
    mounted() {
        console.log('Mounted hook called');
    },
})
