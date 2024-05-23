import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.text}>Followers</span>
          <span className={css.numbers}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Views</span>
          <span className={css.numbers}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Likes</span>
          <span className={css.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;