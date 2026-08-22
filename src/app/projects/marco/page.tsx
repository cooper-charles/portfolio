import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-12">
        <section className="border border-2 border-[#1e1e24] rounded-md p-4">
            <h1 className="font-bold font-heading text-4xl">Geolocation Image Classifier</h1>
            <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Python
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    PyTorch
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    pandas
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    CUDA
                </span>
                <Link href="https://github.com/cooper-charles/marco-geospatial-classifier" target="_blank" className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md hover:border-[#9AA6E8] flex items-center gap-2">
                    <img src="/icons/gitHub.svg" width="15" height="15" className="brightness-0 invert"/>
                    <span>GitHub</span>
                </Link>
                <p>
                    Image classifier model that predicts the country that a Google street view image was taken in
                </p>
            </div>
            <img src="/screenshots/marco/home.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <p>
                I trained a computer vision model to classify Google street view images across 20 countries. The project uses a fine-tuned ConvNeXt-Tiny model trained on roughly 200,000 images and includes a prediction pipeline for evaluating unseen locations.
            </p>
        </section>

        <section>
            <h2 className="mb-5 text-3xl font-heading font-bold">
                Components
            </h2>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Dataset
            </h3>
            <p className="mb-5">
                The dataset was collected using a custom collection script that I created in order to test several different combinations of countries and dataset sizes. The largest dataset used was <b>200,000 images</b> and spanned <b>20 countries</b>. All images come from Google street view and are just a single panorama.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Model
            </h3>
            <p className="mb-5">
                I fine-tuned a pretrained ConvNeXt-Tiny model for 20-class country classification. I replaced the final classification layer to match the target countries, allowing the model to retain general visual features learned during pretraining while adapting to geographic clues in the dataset.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Training
            </h3>
            <p className="mb-5">
                Before training, the data is preprocessed by rolling the panorama around to change the location of the seam in the image. There are also random jitters applied to the image to help the model generalize from geographic features as opposed to camera artifacts. The images are resized to 320x160 and the model is trained on the GPU to speed up training. We use cross-entropy as our loss function and after every epoch save the model with the lowest validation loss as a form of checkpointing.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Results
            </h3>
            <p className="mb-5">
                With our largest dataset of 200,000 images and 20 classes, the model achieved 92% accuracy in the test set.
            </p>
        </section>
        <section>
            <h2 className="mb-5 text-3xl font-heading font-bold">
                Screenshots
            </h2>
            <img src="/screenshots/marco/mx.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <span>Here the model correctly identifies Mexico (mx) with 99.71% confidence</span>
            <img src="/screenshots/marco/za.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <span>Here the model correctly identifies South Africa (za) with 95.09% confidence</span>
            <img src="/screenshots/marco/th.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <span>Here the model correctly identifies Thailand (th) with 99.79% confidence</span>
            
        </section>


      </main>

    </div>
  )
}
