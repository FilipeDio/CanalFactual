

export const AddPostForm = () =>{
    if(!isFormVisible) return null;

    const hideForm = () => setIsFormVisible(false);

    fileSelectedHandler = event => {
        console.log(event);
    }

    return(
        <form>
            <div>
                <input type="file"  onchange={fileSelectedHandler}/>
            </div>
            <div>
                <label>Titulo:</label>
                <input
                    type="text"
                    name="title"
                />
            </div>
            <div>
                <label>Corpo do artigo:</label>
                <textarea
                    name="content"
                />
            </div>
            <button type="submit" onClick={hideForm}>Add Post</button>
        </form>
    );
}
export default AddPostForm;