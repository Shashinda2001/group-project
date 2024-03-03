package com.furniture.controllers;

import com.furniture.utils.ImageUploadUtil;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.Objects;

@RequestMapping("api/v1/image")
@RestController
public class ImageUploaderController {
    @PostMapping("/img")
    public  void saveImage(@RequestParam("files")MultipartFile[] files){
        String uploadDir="productImages";
        Arrays.asList(files).stream().forEach(file->{
            String fileName= StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

        try{
            ImageUploadUtil.saveImage(uploadDir,fileName,file);
        }catch (IOException ioException){

        }

        });
    }
}
