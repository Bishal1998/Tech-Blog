import config from "../config/Config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appWriteURL)
            .setProject(config.appWriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImg, status, userId }) {
        try {
            return await this.databases.createDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug, {
                title,
                content,
                featuredImg,
                status,
                userId
            })
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImg, status }) {
        try {

            return await this.databases.updateDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug, {
                title,
                content,
                featuredImg,
                status
            })

        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug)
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug)
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(config.appWriteDatabaseId, config.appWriteCollectionId, queries)
        } catch (error) {
            throw error;
        }
    }

    //file upload

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appWriteBucketId, ID.unique(), file)
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appWriteBucketId, fileId);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(config.appWriteBucketId, fileId)
        } catch (error) {
            throw error;
        }
    }
}

const service = new Service();

export default service;