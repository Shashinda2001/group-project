package com.furniture.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class ImageUploadUtil {
    public static void saveImage(String uploadDir, String fileName, MultipartFile multipartFile) throws IOException {

        Path uploadPath= Paths.get("C:\\Users\\mamam\\OneDrive\\Desktop\\project_\\group-project\\back-End\\src\\main\\resources\\images"+uploadDir);
        if(!Files.exists(uploadPath)){
            Files.createDirectories(uploadPath);
        }
        try(InputStream inputStream=multipartFile.getInputStream()){
          Path filePath=uploadPath.resolve(fileName);
          Files.copy(inputStream,filePath, StandardCopyOption.REPLACE_EXISTING);

        }catch(IOException ioException){

        }
    }
}
