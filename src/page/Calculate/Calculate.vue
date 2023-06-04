<template>
    <div class="Calculate">
        <div class="Calculate__window">
            <div class="Input">{{ text===" " ? "0" : text }}</div>
            <div class="Buttons">
                <div class="Buttons__lineOne">
                    <div @click="increment('/')">/</div>
                    <div @click="increment('**')">**</div>
                    <div @click="delte()">C</div>
                    <div @click="deleteLast()">🠐</div>
                </div>
                <div class="Buttons__lineOne">
                    <div @click="increment('7')">7</div>
                    <div @click="increment('8')">8</div>
                    <div @click="increment('9')">9</div>
                    <div @click="increment('+')">+</div>
                </div>
                <div class="Buttons__lineOne">
                    <div @click="increment('4')">4</div>
                    <div @click="increment('5')">5</div>
                    <div @click="increment('6')">6</div>
                    <div @click="increment('-')">-</div>
                </div>
                <div class="Buttons__lineOne">
                    <div @click="increment('1')">1</div>
                    <div @click="increment('2')">2</div>
                    <div @click="increment('3')">3</div>
                    <div @click="increment('*')">*</div>
                </div>
                <div class="Buttons__lineOne">
                    <div @click="increment('0')">0</div>
                    <div @click="calc()">=</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

.Calculate {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    &__window {
        padding: 20px;
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 700px;
        border: 1px solid white;
        gap: 10px;
        border-radius: 20px;
        background-color: rgb(28, 33, 36);
        overflow: hidden;
        .Input {
            height: 80px;
            background: rgb(82, 82, 82);
            overflow: hidden;
            width: 99%;
            border-radius: 5px;
            box-shadow: 0 0 5px 2px rgb(49, 49, 49);
            color: white;
            font-size: 50px;
            display: flex;
            align-items: center;
            justify-content: end;
            padding: 5px;
        }
        .Buttons {
            min-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
            &__lineOne {
                display: flex;
                gap: 10px;
                justify-content: space-between;
                div {
                    width: 100px;
                    height: 100px;
                    background-color: rgb(82, 82, 82);
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 40px;
                    box-shadow: 0 0px 2px 4px rgb(49, 49, 49);
                    cursor: pointer;
                    &:hover {
                        background-color: rgb(110, 110, 110);
                    }
                    &:active {
                        box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.35);
                    }
                }
            }
        }
    }
}
body {
    background-color: rgb(49, 49, 49);
    font-family: "Nunito", sans-serif;
    box-sizing: border-box;
}
</style>

<script lang="ts">
export default {
    data() {
        return {
            text: " ",
        };
    },
    methods: {
        increment(a: string) {
            const array = ["+", "-", "*", "/", "**", " "];
            const arr = array.includes(this.text[this.text.length - 1 > 0 ? this.text.length - 1 : 0]);
            let arr2;
            if (arr) arr2 = array.includes(a);

            if (!arr || !arr2) {
                this.text = String(this.text) + String(a);
            }
            arr2=true
        },
        delte() {
            this.text = " ";
        },
        deleteLast() {
            if(this.text!==" "){
                this.text = this.text.slice(0, -1);
            }
        },
        calc() {
            if(this.text.length>1){
                this.text = String(eval(this.text));
            }
        },
    },
};
</script>
