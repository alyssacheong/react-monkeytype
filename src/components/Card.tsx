import style from "./Card.module.css";

export function Card(props: {
  img?: string;
  name: string;
  title: string;
  link?: string;
}) {
  const image =
    props.img ??
    "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=320x399&vertical=center%20320w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=400x498&vertical=center%20400w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=640x797&vertical=center%20640w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=752x937&vertical=center%20752w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=1024x1275&vertical=center%201024w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=1200x1495&vertical=center%201200w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=1504x1873&vertical=center%201504w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=2048x2551&vertical=center%202048w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=273x340&vertical=center%20273w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=546x680&vertical=center%20546w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=303x377&vertical=center%20303w,%20https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=606x755&vertical=center%20606w";

  return (
    <a
      href={props.link}
      target="_blank"
      className={style.card}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h3>{props.name}</h3>
      <p>{props.title}</p>
    </a>
  );
}
