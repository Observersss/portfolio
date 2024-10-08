import classes from "./_map.module.scss";

const Map = () => {
    return (
        <div className={classes.map}>
            <iframe
                className={classes.map__frame}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.83675628583!2d30.36788561507213!3d50.40213793557995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1723304486965!5m2!1sru!2sua"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default Map;