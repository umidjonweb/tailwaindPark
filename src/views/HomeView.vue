<template>
  <div class="py-[16px]">
    <div class="container flex items-center justify-between">
      <div class="flex items-center gap-[100px]">
        <img src="@/img/park.svg" alt="" />

        <div class="flex items-center gap-[100px]">
          <a class="text-[16px] text-[#4C4C4C] font-['Rubik']" href="!#"
            >О платформе</a
          >
          <a class="text-[16px] text-[#4C4C4C] font-['Rubik']" href="!#"
            >Новости</a
          >
          <a class="text-[16px] text-[#4C4C4C] font-['Rubik']" href="!#"
            >Контакты</a
          >
          <a class="text-[16px] text-[#4C4C4C] font-['Rubik']" href="!#"
            >Закупочные процедуры</a
          >
        </div>
      </div>
      <div class="flex items-center gap-[30px]">
        <select
          class="border-0 text-[16px] text-[#4C4C4C] font-['Rubik']"
          name=""
          id=""
        >
          <option class="text-[16px] text-[#4C4C4C] font-['Rubik']" value="">
            Русский
          </option>
          <option class="text-[16px] text-[#4C4C4C] font-['Rubik']" value="">
            Uzbekcha
          </option>
          <option class="text-[16px] text-[#4C4C4C] font-['Rubik']" value="">
            English
          </option>
        </select>
        <button
          class="
            flex
            items-center
            gap-[10px]
            px-[12px]
            border-0
            outline-0
            w-[108px]
            h-[48px]
            bg-[#FF9021]
            rounded-lg
          "
        >
          <img src="@/img/User.svg" alt="" />
          <span class="text-[16px] leading-[140%] text-[#FFFFFF] font-['Rubik']"
            >Вход</span
          >
        </button>
      </div>
    </div>
  </div>
  <div
    class="
      bg-cover bg-[url('@/img/nav.png')]
      py-[16px]
      w-full
      h-[632px]
      bg-center bg-no-repeat
    "
  >
    <div class="container">
      <div
        class="
          mt-[60px]
          flex
          items-center
          gap-[11px]
          pl-[12px]
          max-w-[739px]
          w-full
          h-[60px]
          bg-[#FFF]
          rounded-[8px]
        "
      >
        <img src="@/img/Search.svg" alt="" />
        <input
          class="
            w-full
            border-0
            outline-none
            text-[16px] text-[rgba(0,
            0, 0,
            0.3)]
            leading-[150%]
            font-['Rubik']
          "
          type="text"
          placeholder="Поиск по коду или наименованию"
        />
      </div>
      <h1
        class="
          text-[56px] text-[700] text-[#FFFFFF]
          leading-[140%]
          font-['Manrope']
        "
      >
        Платформа для совершения
      </h1>
      <h1
        class="
          text-[56px] text-[700] text-[#FFFFFF]
          leading-[140%]
          font-['Manrope']
        "
      >
        различных форм электронных закупок
      </h1>
      <div class="mt-[60px] flex items-center gap-[160px]">
        <div>
          <p
            class="
              text-[18px] text-[400] text-[#FFFFFF]
              leading-[150%]
              font-['Rubik']
            "
          >
            Товары в магазинах
          </p>
          <h3
            class="
              text-[56px] text-[700] text-[#FF8F21]
              leading-[140%]
              font-['Manrope']
            "
          >
            265 856
          </h3>
          <div>
            <img src="@/img/Vector.svg" alt="" />
            <span
              class="
                active
                text-[14px] text-[400] text-[#FFFFFF]
                leading-[140%]
                font-['Rubik']
              "
              >21,9%</span
            >
            <span class="notactive">+1 540 сегодня</span>
          </div>
        </div>
        <div class="tovar_right">
          <p
            class="
              text-[18px] text-[400] text-[#FFFFFF]
              leading-[150%]
              font-['Rubik']
            "
          >
            Активные аукционы
          </p>
          <h3
            class="
              text-[56px] text-[700] text-[#FF8F21]
              leading-[140%]
              font-['Manrope']
            "
          >
            1 986
          </h3>
          <div>
            <img src="@/img/Vector.svg" alt="" />
            <span
              class="
                active
                text-[14px] text-[400] text-[#FFFFFF]
                leading-[140%]
                font-['Rubik']
              "
              >21,9%</span
            >
            <span class="notactive">+85 сегодня</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tovary">
    <div class="container">
      <div class="mt-[80px] mb-[30px] flex items-center gap-[16px]">
        <button
          @click="handeTovar"
          :class="{ active_btn: isContent }"
          class="
            text-['Rubik'] text-[16px]
            flex
            items-center
            justify-center
            text-400
            bg-[#FFFFFF]
            px-[22px]
            py-[13px]
            rounded-[8px]
            font-medium
            border-[1px] border-solid border-[#0A0786]
            text-[#0A0786]
          "
        >
          Товары
        </button>
        <button
          @click="showTovar()"
          :class="{ active_btn: !isContent }"
          class="
            notactive_btn
            text-['Rubik'] text-[16px]
            flex
            items-center
            justify-center
            text-400
            px-[22px]
            py-[13px]
            rounded-[8px]
            font-medium
            border-[1px] border-solid border-[#0A0786]
          "
        >
          Аукционы
        </button>
      </div>
      <div
        v-if="isContent"
        class="active flex items-center justify-center flex-wrap gap-[30px]"
      >
        <div
          v-for="(item, ind) in 8"
          :key="ind"
          class="
            border-solid border-[1px]
            rounded-[16px]
            w-[23%]
            border-[#E0E0E0]
          "
        >
          <div
            class="
              relative
              bg-[#F4F4F4]
              py-[26px]
              flex
              items-center
              justify-center
              rounded-[16px]
            "
          >
            <img src="@/img/komp.png" alt="" />
            <span
              class="
                absolute
                bottom-0
                right-0
                px-[11px]
                py-[5px]
                bg-[#0A0786]
                text-[#FFF] text-[14px] text-['Rubik']
                leading-[140%]
                rounded-br-[16px] rounded-tl-[16px]
              "
            >
              #128398
            </span>
          </div>
          <div class="p-[15px]">
            <h4 class="text-[#A1A1A1] text-[14px] text-['Rubik']">
              ТН ВЭД: 6506 91 000 0
            </h4>
            <p class="text-[#222222] text-[18px] text-['Rubik']">
              Apple MacBook Air 13 2020
            </p>
            <h2 class="mt-[35px] text-[#0A0786] text-[20px] text-['Rubik']">
              15 500 000 UZS
            </h2>
            <h5 class="mt-[8px] text-[#A1A1A1] text-[14px] text-['Rubik']">
              В наличии: 34 шт.
            </h5>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center justify-center flex-wrap gap-[30px]">
        <div v-for="(item, ind) in 4" :key="ind" class="w-[48%]">
          <div
            class="
              bg-[#FFF]
              p-[24px]
              rounded-[16px]
              border-[1px] border-solid border-[#E0E0E0]
            "
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-[24px]">
                <p class="text-['Rubik'] text-[16px] text-400 text-[#4c4c4c]">
                  №17350
                </p>
                <p class="text-['Rubik'] text-[16px] text-400 text-[#4c4c4c]">
                  12.09.2022
                </p>
              </div>
              <div class="flex items-center gap-[24px]">
                <a
                  class="text-['Rubik'] text-[16px] text-400 text-[#34B87C]"
                  href="#!"
                  >Опубликован</a
                >
                <div class="flex items-center gap-[4px]">
                  <img src="@/img/Eye.svg" alt="" />
                  <span>32</span>
                </div>
                <img src="@/img/More.svg" alt="" />
              </div>
            </div>
            <h2
              class="
                text-['Manrope']
                mt-[16px]
                mb-[20px]
                leading-[140%]
                text-[24px]
                font-bold
                text-[#0A0786]
              "
            >
              Канцелярские принадлежности
            </h2>
            <div>
              <p
                class="
                  mt-[8px]
                  text-['Rubik'] text-[16px] text-400
                  leading-[140%]
                  text-[#4c4c4c]
                "
              >
                <span>Организатор: </span> Наименование организации
              </p>
              <p
                class="
                  mt-[8px]
                  text-['Rubik'] text-[16px] text-400
                  leading-[140%]
                  text-[#4c4c4c]
                "
              >
                Ташкентская область, Ташкент 3 дня 12:32:16
              </p>
              <p
                class="
                  my-[8px]
                  text-['Rubik'] text-[16px] text-400
                  leading-[140%]
                  text-[#4c4c4c]
                "
              >
                <span class="text-[#767676]"> Осталось до завершения: </span>
                <strong
                  class="
                    text-['Rubik'] text-[16px] text-400
                    leading-[150%]
                    text-[#FF9021]
                  "
                >
                  3 дня 12:32:16</strong
                >
              </p>
            </div>
            <div class="flex justify-between mt-[20px]">
              <div class="mt-19 w-[32%]">
                <p
                  class="
                    text-['Rubik'] text-[16px] text-400
                    leading-[140%]
                    text-[#4c4c4c]
                  "
                >
                  Стартовая
                </p>
                <p
                  class="
                    text-['Rubik'] text-[16px] text-400
                    leading-[140%]
                    text-[#4c4c4c]
                  "
                >
                  стоимость
                </p>
                <h1
                  class="
                    mt-[8px]
                    text-['Rubik'] text-[20px]
                    font-extrabold
                    leading-[140%]
                    text-[#222222]
                  "
                >
                  10 000 UZS
                </h1>
              </div>
              <div class="mt-19 w-[32%]">
                <p
                  class="
                    text-['Rubik'] text-[16px] text-400
                    leading-[140%]
                    text-[#4c4c4c]
                  "
                >
                  Последняя предложенная
                </p>
                <p
                  class="
                    text-['Rubik'] text-[16px] text-400
                    leading-[140%]
                    text-[#4c4c4c]
                  "
                >
                  стоимость
                </p>
                <h1
                  class="
                    mt-[8px]
                    text-['Rubik'] text-[20px]
                    font-extrabold
                    leading-[140%]
                    text-[#222222]
                  "
                >
                  8 000 UZS
                </h1>
              </div>
              <div class="mt-19 w-[32%]">
                <p
                  class="
                    text-['Rubik'] text-[16px] text-400
                    leading-[140%]
                    text-[#4c4c4c]
                  "
                >
                  Количество
                </p>
                <p
                  class="
                    text-['Rubik'] text-[16px] text-400
                    leading-[140%]
                    text-[#4c4c4c]
                  "
                >
                  участников
                </p>
                <h1
                  class="
                    mt-[8px]
                    text-['Rubik'] text-[20px]
                    font-extrabold
                    leading-[140%]
                    text-[#222222]
                  "
                >
                  10
                </h1>
              </div>
              <!-- <div class="usd_box">
                <p>Последняя предложенная</p>
                <p>стоимость</p>
                <h1>8 000 UZS</h1>
              </div>
              <div class="usd_box">
                <p>Количество</p>
                <p>участников</p>
                <h1>2</h1>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-[48px] mb-[80px] flex items-center justify-center">
    <button
      class="
        pr-[13px]
        rounded-[8px]
        pl-[22px]
        flex
        items-center
        gap-[10px]
        h-[48px]
        bg-[#FF9021]
      "
    >
      <a
        class="
          text-[16px]
          font-medium
          text-[#FFFFFF]
          leading-[140%]
          font-['Rubik']
        "
        href="!#"
        >Показать все</a
      >
      <img src="@/img/arrow.svg" alt="" />
    </button>
  </div>
  <div class="">
    <div class="container flex gap-[35px]">
      <div class="w-1/2">
        <h1
          class="
            text-[40px]
            font-bold
            text-[#222222]
            leading-[140%]
            font-['Manrope']
          "
        >
          О платформе
        </h1>
        <p
          class="
            text-[18px]
            font-normal
            text-[rgba(34,
            34, 34,
            0.8)]
            leading-[150%]
            font-['Rubik']
            mt-[25px]
          "
        >
          Осуществлять государственные закупки в электронном магазине
          можнотоварам, услугам или работам, которые госзаказчик желает
          приобрести, не предъявляются специальные (дополнительные) требования
        </p>
        <p
          class="
            text-[18px]
            font-normal
            text-[rgba(34,
            34, 34,
            0.8)]
            leading-[150%]
            font-['Rubik']
            mt-[15px]
          "
        >
          Например, вэлектронном магазине можно закупать канцтовары, спецодежду,
          офисную технику, также такие услуги, какизготовление удостоверений и
          сертификатов, сервисное обслуживание автомобилей, транспортировка
          грузов идругое
        </p>
        <div class="mt-[48px]">
          <button
            class="
              pr-[13px]
              rounded-[8px]
              pl-[22px]
              flex
              items-center
              gap-[10px]
              h-[48px]
              bg-[#FF9021]
            "
          >
            <a
              class="
                text-[16px]
                font-medium
                text-[#FFFFFF]
                leading-[140%]
                font-['Rubik']
              "
              href="!#"
              >Подробнее</a
            >
            <img src="@/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="platforma_right">
        <img src="@/img/all.png" alt="" />
      </div>
    </div>
  </div>
  <div class="statistic mt-[60px]">
    <div class="container flex justify-between">
      <div class="statistic_box">
        <h1
          class="
            text-[56px]
            font-bold
            text-center text-[#0A0786]
            leading-[140%]
            font-['Manrope']
          "
        >
          140
        </h1>
        <p
          class="
            text-[16px]
            font-normal
            text-center text-[rgba(34,
            34, 34,
            0.8)]
            leading-[140%]
            font-['Rubik']
          "
        >
          договоров заключено
        </p>
      </div>
      <div class="statistic_box">
        <h1>34,8<span> млн сум</span></h1>
        <p>общая сумма сделок</p>
      </div>
      <div class="statistic_box">
        <h1>23 067</h1>
        <p>участников в системе</p>
      </div>
      <div class="statistic_box">
        <h1>562 876</h1>
        <p>товаров в каталоге</p>
      </div>
    </div>
    <div class="button">
      <button>Реестр мониторинга по объектам Республики Узбекистан</button>
    </div>
  </div>
  <div class="news">
    <div class="container">
      <h1>Новости</h1>
      <div class="news_content">
        <div class="news_box">
          <img src="@/img/image.png" alt="" />
          <p>18 июня, 2022</p>
          <h5>
            Как определяется победитель отбора в госзакупках <br />
            в Узбекистане
          </h5>
        </div>
        <div class="news_box">
          <img src="@/img/image.png" alt="" />
          <p>18 июня, 2022</p>
          <h5>
            Как определяется победитель отбора в госзакупках <br />
            в Узбекистане
          </h5>
        </div>
        <div class="news_box">
          <img src="@/img/image.png" alt="" />
          <p>18 июня, 2022</p>
          <h5>
            Как определяется победитель отбора в госзакупках <br />
            в Узбекистане
          </h5>
        </div>
        <div class="news_box">
          <img src="@/img/image.png" alt="" />
          <p>18 июня, 2022</p>
          <h5>
            Как определяется победитель отбора в госзакупках<br />
            в Узбекистане
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div class="partners">
    <div class="container">
      <h1>Нам доверяют</h1>
      <div class="partners_content">
        <div class="partners_content_box">
          <img src="@/img/Uber.svg" alt="" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Verizon.svg" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Uber.svg" alt="" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Verizon.svg" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Uber.svg" alt="" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Verizon.svg" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Uber.svg" alt="" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Verizon.svg" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Uber.svg" alt="" />
        </div>
        <div class="partners_content_box">
          <img src="@/img/Verizon.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
// import auth from "@/api/index.js";
import { onMounted, ref } from "vue";
// const item = ref(null);
const isContent = ref(true);
//   data() {
//     return {
//       item: null,
//       isContent: true,
//     };
//   },
//   methods: {
const handeTovar = () => {
  isContent.value = true;
};
const tovarContent = async () => {
  try {
    const datas = await axios.get(
      "https://tenderpark.uz/api/v1/public-v-1-controller/get"
    );
    console.log(datas);
  } catch (err) {
    console.log(err);
  }
};
const showTovar = () => {
  isContent.value = false;
};
onMounted(async () => {
   tovarContent();
})
// return {
//   item,
//   isContent
// }
//   },
</script>
<style lang="scss">
.notactive {
  color: #cbcbcb;
}
.active_btn {
  color: #ffffff !important;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 22px;

  background: #0a0786 !important;
  border-radius: 8px;
}
.statistic {
  margin-top: 60px;

  .container {
    display: flex;
    justify-content: space-between;

    h1 {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 700;
      font-size: 56px;
      line-height: 140%;
      text-align: center;

      color: #0a0786;

      span {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
        text-align: center;
        letter-spacing: -0.18px;
        color: #0a0786;
      }
    }

    p {
      font-family: "Rubik";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;

      color: rgba(34, 34, 34, 0.8);
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;

    button {
      background: white;
      padding: 13px 24px;
      border: 2px solid #0a0786;
      border-radius: 8px;
      font-family: "Rubik";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;

      color: #0a0786;
    }
  }

  .statistic_box {
    width: 20%;
  }
}

.news {
  h1 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    color: #222222;
  }

  .news_content {
    display: flex;
    gap: 30px;

    .news_box {
      p {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: #767676;
      }

      h5 {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 140%;
        color: #4c4c4c;
      }
    }
  }
}

.partners {
  .container {
    h1 {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 140%;
      color: #222222;
      margin-top: 80px;
      margin-bottom: 30px;
    }

    .partners_content {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;

      .partners_content_box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 19.5%;
        height: 175px;
        background: #f8f8f9;
      }
    }
  }
}
</style>
