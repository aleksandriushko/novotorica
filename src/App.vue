<template>
  <div class="min-h-screen_">
    <div class="container mx-auto p-10 max-w-screen-2xl">
      <div class="flex mb-4">
        <div class="w-1/3 bg-style-1 p-5">
          <h2 class="title-style-1">Валюта:</h2>
          <select
            v-if="ativeSelect == 'buy'"
            class="px-4 py-3 select-style mt-3"
            v-model="selectedValute"
          >
            <option
              v-for="valute in allValutesList"
              :key="valute.ID"
              :value="valute"
            >
              {{ valute.Name }} ({{ valute.CharCode }})
            </option>
          </select>
          <select
            v-if="ativeSelect == 'sell'"
            class="px-4 py-3 select-style mt-3"
            v-model="selectedValute"
          >
            <option
              v-for="valute in balanceWithoutRub"
              :key="valute.CharCode"
              :value="valute"
            >
              {{ valute.Name }} ({{ valute.CharCode }})
            </option>
          </select>
          <h2 class="title-style-1 mt-3">Доступно:</h2>
          <div class="money-text-style mt-3" v-if="ativeSelect == 'buy'">
            {{ availableForPurchase }}
          </div>
          <div class="money-text-style mt-3" v-if="ativeSelect == 'sell'">
            {{ availableForSale }}
          </div>
          <h2 class="title-style-1 mt-3">Хочу:</h2>
          <div class="mt-3">
            <button
              @click="ativeSelect = 'buy'"
              :class="ativeSelect == 'sell' ? 'a' : 'button-active'"
              class="button-buy"
            >
              купить
            </button>
            <button
              @click="ativeSelect = 'sell'"
              :class="ativeSelect == 'buy' ? 'a' : 'button-active'"
              class="button-sell"
            >
              продать
            </button>
          </div>
          <input
            v-model="exchangeAmount"
            @keydown.enter="buyValute"
            @keypress="onlyNumber"
            type="text"
            class="money-to-buy mt-3"
            placeholder="0.00"
          />
          <h2 class="title-style-1 mt-3">{{ totaltAmountTitle }}</h2>
          <div class="money-text-style mt-3">{{ totaltAmount }} ₽</div>

          <button
            @click="buyValute"
            v-if="ativeSelect == 'buy'"
            class="button-pay mt-3"
          >
            Купить
          </button>
          <button
            @click="sellValute"
            v-if="ativeSelect == 'sell'"
            class="button-pay mt-3"
          >
            Продать
          </button>

          <div class="alert-error" v-if="errorMsg">{{ errorMsg }}</div>
        </div>
        <div class="w-1/3 p-5">
          <h2 class="title-style-2">Курс валют на {{ titleDate }}</h2>
          <div class="table-head flex mt-3 flex-wrap content-center">
            <div class="w-1/3">Код</div>
            <div class="w-1/3">Единица</div>
            <div class="w-1/3">Курс</div>
          </div>
          <div
            v-for="valute in allValutesList"
            :key="valute.ID"
            class="table-body flex flex-wrap content-center"
          >
            <div class="w-1/3">{{ valute.CharCode }}</div>
            <div class="w-1/3">{{ valute.Nominal }}</div>
            <div
              class="w-1/3"
              :class="{
                'valute-up': +valute.Value.toFixed(2) > +valute.Previous.toFixed(2),
                'valute-down': +valute.Value.toFixed(2) < +valute.Previous.toFixed(2)
              }"
            >
              {{ valute.Value }} {{ valuteValue(valute.Value, valute.Previous) }}
            </div>
          </div>
        </div>
        <div class="w-1/3  bg-style-1 p-5">
          <h2 class="title-style-2">Баланс</h2>
          <div
            v-for="(valute, valuteCode) in hesBalance"
            :key="valuteCode"
            class="balance flex mt-3 flex-wrap content-center"
          >
            <div class="w-1/2">{{ valute.CharCode }}</div>
            <div class="w-1/2">{{ decimalPlacesVal(valute.balanceValue) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      allValutesList: [],
      balanceList: {},

      ativeSelect: "buy",

      selectedValute: null,
      exchangeAmount: null,

      titleDate: "",
      errorMsg: ""
    };
  },

  computed: {
    hesBalance() {
      const filtered = Object.entries(this.balanceList).filter(
        item => item[1].balanceValue > 0
      );
      let result = Object.fromEntries(filtered);

      return result;
    },

    totaltAmount() {
      return this.selectedValute?.Value
        ? (this.exchangeAmount * this.selectedValute?.Value).toFixed(2)
        : 0..toFixed(2);
    },

    payListValutes() {
      const filtered = Object.entries(this.balanceList).filter(item => item[1] > 0);
      let result = Object.fromEntries(filtered);

      return result;
    },

    balanceWithoutRub() {
      const filtered = Object.entries(this.hesBalance).filter(
        item => item[1].CharCode != "RUB"
      );
      let result = Object.fromEntries(filtered);

      return result;
    },

    totaltAmountTitle() {
      return this.ativeSelect === "buy" ? "Заплачу:" : "Получу:";
    },

    availableForPurchase() {
      return (
        (this.balanceList.RUB?.balanceValue / this.selectedValute?.Value)
        .toFixed(2) + " " + this.selectedValute?.CharCode
      );
    },

    availableForSale() {
      if (this.selectedValute?.balanceValue != undefined) {
        return this.selectedValute?.balanceValue + " " + this.selectedValute?.CharCode
      } else {
        return "-";
      }
    }
  },

  methods: {
    valuteValue(currentValue, previousValue) {
      currentValue = +currentValue.toFixed(2);
      previousValue = +previousValue.toFixed(2);

      let differenceOfValues = "";

      if (currentValue <= previousValue) {
        differenceOfValues = (currentValue - previousValue).toFixed(2);
      } else {
        differenceOfValues = "+" + (currentValue - previousValue).toFixed(2);
      }

      return `(${differenceOfValues})`;
    },

    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
        $event.preventDefault();
      }
    },

    buyValute() {
      const balanceСhange = this.balanceList.RUB.balanceValue - this.totaltAmount;
      if (balanceСhange >= 0) {
        this.balanceList.RUB.balanceValue -= this.totaltAmount;

        this.balanceList[
          this.selectedValute.CharCode
        ].balanceValue = this.exchangeAmount;

        this.exchangeAmount = null;
        localStorage.setItem("balance-list", JSON.stringify(this.balanceList));
      }
    },

    sellValute() {
      if (this.exchangeAmount <= this.selectedValute.balanceValue) {

        this.balanceList[this.selectedValute.CharCode].balanceValue =
          this.selectedValute.balanceValue - this.exchangeAmount;

        this.balanceList.RUB.balanceValue += +this.totaltAmount;

        this.exchangeAmount = null;
        localStorage.setItem("balance-list", JSON.stringify(this.balanceList));
      }
    },
    
    decimalPlacesVal(val) {
      return (+val).toFixed(2);
    }
  },

  mounted() {
    fetch("https://www.cbr-xml-daily.ru/archive/2021/03/03/daily_json.js")
      .then(response => response.json())
      .then(data => {
        const d = new Date(data.Date);
        const year = d.getFullYear();
        let month = "" + (d.getMonth() + 1);
        let day = "" + d.getDate();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        this.titleDate = `${day}.${month}.${year}`;
        this.allValutesList = data.Valute;
        this.selectedValute = this.allValutesList.AUD;

        const balanceData = localStorage.getItem("balance-list");
        if (balanceData) {
          this.balanceList = JSON.parse(balanceData);
        } else {
          let obj = {};
          for (const prop in data.Valute) {
            obj[prop] = {
              balanceValue: 0,
              Name: data.Valute[prop].Name,
              CharCode: data.Valute[prop].CharCode,
              Value: data.Valute[prop].Value
            };
          }
          obj.RUB = {
            balanceValue: 10000,
            Name: "Российский рубль",
            CharCode: "RUB"
          };
          this.balanceList = obj;
        }
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");
.bg-style-1 {
  background-color: #f6f6f6;
}
.title-style-1 {
  font-family: PT Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
}
.select-style {
  font-family: PT Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: 100%;
}
.money-text-style {
  font-family: PT Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
.button-buy,
.button-sell {
  height: 32px;
  width: 50%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  padding: 8px, 16px, 8px, 16px;
  border: 1px solid #d8d8d8;
  background: #ffffff;
  color: #333333;

}
.button-active {
  color: #34aaf2;
}
.money-to-buy {
  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(51, 51, 51, 0.5);
}
.button-pay {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #00b956;
  border: 1px solid #00b956;
  box-sizing: border-box;
  width: 256px;
  height: 32px;
}
.title-style-2 {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.table-head {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: rgba(51, 51, 51, 0.5);
  background: #ffffff;
  box-shadow: 0px 1px 0px #d8d8d8;
  height: 32px;
}
.table-body {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  height: 32px;
}
.valute-up {
  color: #00b956;
}
.valute-down {
  color: #f62434;
}
.alert-error {
  color: #f62434;
}
.balance {
  height: 32px;
  font-size: 13px;
  line-height: 16px;
}
</style>
