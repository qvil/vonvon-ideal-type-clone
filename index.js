const data = [
  {
    title: "당신의 이상형의 성별은?",
    options: [
      {
        title: "남",
        image:
          "https://lh3.googleusercontent.com/w7nMTiE_WuihyRiOg28sMC-4Duew5aYnFWI4Jc1NP0Y0ErPOKcDydIgqvLARWVZtAnj5TcvNueEd1FbYfBFZZDGCII7-nBK4wQ=s320-l65"
      },
      {
        title: "여",
        image:
          "https://lh3.googleusercontent.com/9bZ-h-v7yb9ieKxXGn6f1funwzdoDwuGQU5CPwdmiTyS0IASerml6H2t0GlAc3iQ0BA14iC0Yp5CtmmVqhNpXOQFiW4bGgnhcg=s320-l65"
      }
    ]
  },
  {
    title: "꿈에 그리던 이상형과의 데이트, 그(녀)는 어떤 옷을 입고 나왔을까요?",
    options: [
      {
        title: "세련되고 어른스럽게!",
        image:
          "https://lh3.googleusercontent.com/MriN-VCQm-RJCvdXIFwdLQSNXH3pC2uBwAtpyLJ2x2ofVu3oKXw1Gv_XYCAxtaT9iGVyU8bVsxRUS69OHd3nW4zQE5cmoF9U7Q=s320-l65"
      },
      {
        title: "편안하고 캐주얼하게!",
        image:
          "https://lh3.googleusercontent.com/nP3gXQIeJwx1jjkmfdQKxe-KRCFlhYp8JHk2u4Ft3UiP5fTw9iqDcLk8u9FRRiAx8KiOBHbKtfJ3tJ7KlNKNlfFAJR6F1kuXaA=s320-l65"
      }
    ]
  },
  {
    title:
      "같이 취미생활 즐기자고 데이트를 제안하는 그(녀), 어떤 계획을 짜왔을까요?",
    options: [
      {
        title: "자전거 탈래? 놀이공원은? 활동적인 데이트",
        image:
          "https://lh3.googleusercontent.com/nVYcp2nBFF3pBBNbWHoq1D5uBw79Vn8LXyrrJppwLR5Tf4Bzm3VNkxPC6gsaVSa5p_ALcv5fv1Ogy1b_vc1_GQP9GmDq_-owsg=s320-l65"
      },
      {
        title: "만화카페나 영화보기 어때? 실내 데이트",
        image:
          "https://lh3.googleusercontent.com/nhttps://lh3.googleusercontent.com/_fhQfgLVYZL1pL9rLc1l_O2GX2dcb7Py9i0R66_tt9Mm-GjcMzRwEsSIPvGxi8V-1NAv8xFIli8sw4-RaygUBq8Dve7P2FM0FDc=s320-l65"
      }
    ]
  },
  {
    title: "오랜만에 당신을 만난 그(녀), 당신을 어떻게 해주면 좋을까요?",
    options: [
      {
        title: "차분하게 당신의 이야기를 들어준다.",
        image:
          "https://lh3.googleusercontent.com/qI8oN4hOvBIpaRSU52FeL5wSdscNpgAZ8c7Gkq0kFPSqbDg3Z_VJKjP4esN8-csuL2wHulVzq2vIPSa2x2Gz6i_oWba0v_PF=s320-l65"
      },
      {
        title: "당신을 웃게 해준다.",
        image:
          "https://lh3.googleusercontent.com/0IHCCl-tbyUUzbGWomU1kddY84LQsr1ntTwUCgJy8ucruhs9ObOhh-dSkUFj68J_n0fmHYSJ30FTt3ci8Zy4EnhbwFIxFwdKlQ=s320-l65"
      }
    ]
  },
  {
    title: "당신은 어떨 때 그(녀)에게 더 설렐까요?",
    options: [
      {
        title: "듬직하게 당신을 리드해줄 때",
        image:
          "https://lh3.googleusercontent.com/4iVA_z_HP9QM7_xAsTplBM4qCQ79X-3ISXn4ezlpTb_LHy8g2Sumkh5fQkUKJzF-wSkebl8d1MTvuZtBJxYMS8eTmvlRJNqVTw=s320-l65"
      },
      {
        title: "지켜주고 싶은 귀여운 모습을 볼 때",
        image:
          "https://lh3.googleusercontent.com/cRKs_2Q6GQT2WtKZCp_n5HJfIral0n4cWafD1gAk7SVmJgwp8nGW4yc2wF763FhQKl8yp-p6eA0950lXcDNlnCydOD0TMyZ_BwE=s320-l65"
      }
    ]
  },
  {
    title: "바쁜 시험기간. 당신의 이상형은 어떻게 공부하는 것을 선호할까요?",
    options: [
      {
        title: "혼자 할 때 집중이 더 잘 돼!",
        image:
          "https://lh3.googleusercontent.com/UbiktiS2moVoIqKTtswBSHbdmxPU913wWi0AmdlOqz7XZuTfU1oF7oAceVyr-jlsLAlt2zjqyhfJSh_fA7NfsWffISVa4xZHn5o=s320-l65"
      },
      {
        title: "만나서 같이 공부하고 싶어!",
        image:
          "https://lh3.googleusercontent.com/ol2zDl21jkyCsUV3iu3p8xnCB_ROjSxJdNHYZn48kaCXWCEoGjm9UUPtgk5TztjCjDMxOqH5CTFSDTWDyv_raXsv9gVYfWAA=s320-l65"
      }
    ]
  }
];

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  const section = document.createElement("section");
  section.dataset.index = index;
  section.id = index;

  if (
    index !== parseInt(document.querySelector("#content").dataset.contentIndex)
  ) {
    section.style.display = "none";
  }

  element.options.forEach(element => {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const cardContent = document.createElement("div");
    cardContent.className = "card-content text-center";
    cardContent.append(element.title);
    img.src = element.image;
    card.className = "card card-select";
    card.append(img, cardContent);
    card.addEventListener("click", e => {
      // e.currentTarget.parentElement.id

      const findId = "#" + (parseInt(e.currentTarget.parentElement.id) + 1);
      console.log("TCL: findId", findId);

      document.querySelector(findId);
      document.querySelector("#content").dataset.contentIndex =
        parseInt(e.currentTarget.parentElement.dataset.index) + 1;

      document.querySelector("#content section").dataset.index;
      console.log(document.querySelector("#content").dataset.contentIndex);

      console.log(document.querySelector("#content section").dataset.index);
      if (
        document.querySelector("#content").dataset.contentIndex ===
        document.querySelector("#content section").dataset.index
      ) {
        document.querySelector("#content section").style.display = "";
      }
    });

    section.append(card);
  });

  document.querySelector("#content").appendChild(section);
}
