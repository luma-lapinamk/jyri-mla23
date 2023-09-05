import numpy as np
from sklearn.metrics import classification_report


class NearestNeighborClassifier:

    def __init__(self):
        self.model_name = 'nearest_neighbor_classifier'

    @staticmethod
    def calculate_pairwise_datapoint_distances(x_a, x_b):
        return np.sqrt(np.sum((x_b-np.reshape(x_a, (1, x_b.shape[1])))**2, axis=1))

    @staticmethod
    def calculate_neighbor_indices(pairwise_distances, n_neighbors):
        return np.argsort(pairwise_distances)[0: n_neighbors]

    @staticmethod
    def calculate_predicted_class(neighbor_indices, y):
        classes, class_counts = np.unique(y[neighbor_indices], return_counts=True)
        return classes[np.argmax(class_counts)]

    def predict(self, x, y, x_new, n_neighbors):
        n_new = x_new.shape[0]
        predicted_classes = np.empty((n_new, ), dtype=int)
        for ii in np.arange(n_new):
            pairwise_distances = self.calculate_pairwise_datapoint_distances(x_new[ii, :], x)
            neighbor_indices = self.calculate_neighbor_indices(pairwise_distances, n_neighbors)
            predicted_classes[ii] = self.calculate_predicted_class(neighbor_indices, y)
        return predicted_classes

    def score(self, x, y, x_new, y_new, n_neighbors):
        y_new_predicted = self.predict(x, y, x_new, n_neighbors)
        return classification_report(y_new, y_new_predicted, output_dict=True)

