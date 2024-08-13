import * as uuidi from 'uuid';
import * as path from 'path';

class FileService {
    saveFile (file){
    try{
        const fileName = uuidi.v4()+'.jpg';
        const FilePath = path.resolve('static',fileName);
        file.mv(FilePath);
        return fileName;
    }
    catch (e){
    console.log(e)
}
}

}

export default new FileService();