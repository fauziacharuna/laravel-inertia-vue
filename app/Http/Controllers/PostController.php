<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->get();
        return Inertia::render('Posts/Index',
            [
                'posts' => $posts
            ]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create');

    }

    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'title' => 'required',
            'word' => 'required',
        ]);

        //create post
        $post = Post::create([
            'title' => $request->title,
            'content' => $request->word
        ]);

        if ($post) {
            return Redirect::route('posts.index')->with('message', 'Data Berhasil Disimpan!');
        }
    }

    public function edit(Post $post)
    {
        return Inertia::render('Posts/Edit',
            ['post' => $post]
        );
    }

    public function update(Request $request, Post $post)
    {
        //set validation
        $request->validate([
            'title'   => 'required',
            'word' => 'required',
        ]);

        //update post
        $post->update([
            'title'     => $request->title,
            'content'   => $request->word
        ]);

        if($post) {
            return Redirect::route('posts.index')->with('message', 'Data Berhasil Diupdate!');
        }
    }
    public function destroy($id){
        $post = Post::findOrfail($id);
        $post->delete();
        if ($post){
            return Redirect::route('posts.index')->with('message', 'Data Berhasil Dihapus!');

        }
    }


    //
}
