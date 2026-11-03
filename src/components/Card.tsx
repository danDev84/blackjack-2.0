interface UICard {
    src: string,
    width?: number,
    id?: number,
    key: number,
}

export const Card = (props: UICard) => {

    return (
        <>
            <div>
                <img key={props.id} src={props.src} width="100"/>
            </div>
        </>
    );
};  