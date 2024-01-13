import ImageModel from "../../common/models/imageObj";

export default class ArticleModel {
    constructor(title, content, imageName, imageType) {
        this.title = title;
        this.content = content;
        this.image = new ImageModel(imageName, imageType);
    }
}