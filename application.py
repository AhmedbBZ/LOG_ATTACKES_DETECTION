from flask import Flask, request, jsonify, render_template, send_from_directory
import joblib
from pyngrok import ngrok

# Set up ngrok
ngrok.set_auth_token("2qJTHBHczhYinnSkFgZO45I1fEH_7B8AFCRaDNz9nfbA9PMZs")  # Replace with your actual authtoken

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/images'  # Path to the folder with images

# Load model and vectorizer
clf = joblib.load("model_finale.pkl")
vectorizer = joblib.load("vectorizer.pkl")


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        logline = request.form.get("logline")
        if not logline:
            return jsonify({'error': 'No log line provided'}), 400

        # Process and predict
        data = [logline]
        input_features_transform = vectorizer.transform(data)
        log_status = clf.predict(input_features_transform)[0]

        # Return result
        response = {'log': log_status}
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

